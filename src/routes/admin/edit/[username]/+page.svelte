<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Modal from "../../../../lib/Modal.svelte"

    let balance = 0;

    let give_amount = 0;
    let take_amount = 0;
    let new_password = "";

    function give() {
        give_amount = Math.floor(give_amount);

        

        balance += give_amount;
        give_amount = 0;
    }
    
    function take() {
        take_amount = Math.floor(take_amount);



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
    <h2>ID: {data.account.username} Имя: {data.account.name}</h2>
    <h2>Баланс: {balance}</h2>

    <Modal 
        modal_id="give"
        title="Начислить баллы" 
        apply_button_text="Начислить" 
        func={give} 
        launch_button_text="Начислить">
        <input placeholder="Сколько начислить?" min="0" type="number" class="form-control" bind:value={give_amount}>
    </Modal>

    <Modal 
        modal_id="take"
        title="Спсиать баллы" 
        apply_button_text="Списать" 
        func={take} 
        launch_button_text="Списать">
        <input placeholder="Сколько списать?" type="number" min="0" class="form-control" bind:value={take_amount}>
    </Modal>

    <Modal 
        modal_id="passwd"
        title="Сменить пароль"
        apply_button_text="Применить" 
        func={set_new_password} 
        launch_button_text="Сменить пароль">
        <input placeholder="Новый пароль" type="password" class="form-control" bind:value={new_password}>
    </Modal>
</div>

{/if}
