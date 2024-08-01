<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Modal from "../../../../lib/Modal.svelte"
    import axios from 'axios';

    let balance = data.edit_account.balance;

    let give_amount = 0;
    let take_amount = 0;
    let new_password = "";
    let reason = "";

    function give() {
        give_amount = Math.floor(give_amount);

        axios.post('/api/tx', {
            by: data.user.id,
            target: data.edit_account.id,
            reason: reason,
            amount: give_amount
        });

        balance += give_amount;
        give_amount = 0;
        reason = "";
    }
    
    function take() {
        take_amount = Math.floor(take_amount);

        if (take_amount > balance) {
            take_amount = 0;
            return;
        }

        axios.post('/api/tx', {
            by: data.user.id,
            target: data.edit_account.id,
            reason: reason,
            amount: -take_amount
        });


        balance -= take_amount;
        take_amount = 0;
    }
    
    function set_new_password() {
        new_password = "";
    }
</script>

{#if data.error}
<h1>Пользователь не найден</h1>
{:else}
<div class="container">
    <h1>Редактирование аккаунта</h1>
    <h2>ID: {data.edit_account.username} Имя: {data.edit_account.name}</h2>
    <h2>{balance} Kvant</h2>

    <Modal 
        modal_id="give"
        title="Начислить баллы" 
        apply_button_text="Начислить" 
        func={give} 
        launch_button_text="Начислить">
        <form>
            <input placeholder="Сколько начислить?" min="0" type="number" class="form-control" bind:value={give_amount}>
            <input type="text" class="form-control" bind:value={reason} placeholder="Причина">
        </form>
    </Modal>

    <Modal 
        modal_id="take"
        title="Спсиать баллы" 
        apply_button_text="Списать" 
        func={take} 
        launch_button_text="Списать">
        <form>
            <input placeholder="Сколько списать?" type="number" min="0" class="form-control" bind:value={take_amount}>
            <input type="text" class="form-control" bind:value={reason} placeholder="Причина">
        </form>
    </Modal>

    <Modal 
        modal_id="passwd"
        title="Сменить пароль"
        apply_button_text="Применить" 
        func={set_new_password} 
        launch_button_text="Сменить пароль">
        <form>
            <input placeholder="Новый пароль" type="password" class="form-control" bind:value={new_password}>
        </form>
    </Modal>
</div>

{/if}
