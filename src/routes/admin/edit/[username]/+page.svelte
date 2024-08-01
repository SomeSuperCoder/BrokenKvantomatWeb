<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import AccountCard from "../../../../lib/AccountCard.svelte";
    import Modal from "../../../../lib/Modal.svelte";
    import axios from "axios";
    import { goto } from '$app/navigation';

    function reloadPage() {
        const thisPage = window.location.pathname;
        console.log('goto ' + thisPage);
        goto(thisPage);
    }

    let balance = data.edit_account?.balance ?? 0;

    let give_amount = 0;
    let take_amount = 0;
    let new_password = "";
    let reason = "";

    function give() {
        give_amount = Math.abs(Math.floor(give_amount));

        axios.post("/api/tx", {
            by: data.user.id,
            target: data.edit_account.id,
            reason: reason,
            amount: give_amount,
        });

        balance += give_amount;
        give_amount = 0;
        reason = "";

        reloadPage();
    }

    function take() {
        take_amount = Math.abs(Math.floor(take_amount));

        if (take_amount > balance) {
            take_amount = 0;
            return;
        }

        axios.post("/api/tx", {
            by: data.user.id,
            target: data.edit_account.id,
            reason: reason,
            amount: -take_amount,
        });

        balance -= take_amount;
        take_amount = 0;

        reloadPage();
    }

    function set_new_password() {
        

        new_password = "";
    }

    function remove() {
        console.log(data.edit_account.id);

        axios.post("/api/delete", {
            target: data.edit_account.id
        });
    }
</script>

{#if data.error || data.edit_account.role != "user"}
    <div class="container">
        <h1>Пользователь не найден</h1>
    </div>
{:else}
    <div class="container">
        <div class="mt-5"></div>
        <AccountCard
            {balance}
            name={data.edit_account.name}
            txes={data.txes}
            raiting={0}
        >
            <Modal
                modal_id="give"
                title="Начислить баллы"
                apply_button_text="Начислить"
                func={give}
                launch_button_text="Начислить"
            >
                <form>
                    <input
                        placeholder="Сколько начислить?"
                        min="0"
                        type="number"
                        class="form-control"
                        bind:value={give_amount}
                    />
                    <input
                        type="text"
                        class="form-control"
                        bind:value={reason}
                        placeholder="Причина"
                    />
                </form>
            </Modal>

            <Modal
                modal_id="take"
                title="Спсиать баллы"
                apply_button_text="Списать"
                func={take}
                launch_button_text="Списать"
            >
                <form>
                    <input
                        placeholder="Сколько списать?"
                        type="number"
                        min="0"
                        class="form-control"
                        bind:value={take_amount}
                    />
                    <input
                        type="text"
                        class="form-control"
                        bind:value={reason}
                        placeholder="Причина"
                    />
                </form>
            </Modal>

            <Modal
                modal_id="passwd"
                title="Сменить пароль"
                apply_button_text="Применить"
                func={set_new_password}
                launch_button_text="Сменить пароль"
            >
                <form>
                    <input
                        placeholder="Новый пароль"
                        type="password"
                        class="form-control"
                        bind:value={new_password}
                    />
                </form>
            </Modal>

            <Modal
                modal_id="delete"
                title="Вы уверены?"
                apply_button_text="Да, удалить"
                func={remove}
                danger="true"
                launch_button_text="Удалить аккаунт"
            >
                <form>
                    <h1 class="text-danger">
                        Это действие нельзя буде отменить!
                    </h1>
                </form>
            </Modal>
        </AccountCard>
    </div>
{/if}
