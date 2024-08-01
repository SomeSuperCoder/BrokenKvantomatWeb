<script>
    import AccountCard from '../../lib/AccountCard.svelte';

    export let data;

    const user = data.user;
    const name = user.name;
    const balance = user.balance;
</script>

<div class="container">
    <AccountCard current_user="true" name={name} balance={balance} raiting="0" txes={data.txes}>
        <form method="POST" action="/?/logout">
            <button type="submit" class="btn btn-outline-primary"
                >Выйти из аккаунта</button
            >
        </form>
    </AccountCard>
</div>
