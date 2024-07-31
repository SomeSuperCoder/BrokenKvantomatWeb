<script>
    export let data;

    const user = data.user;
    const name = user.name;
    const balance = user.balance;
</script>

<div class="container">
    <div class="card">
        <div class="header">
            <h1 class="mb-3">Добро пожаловать, {name}!</h1>
            <p class="balance">{balance} Kvant</p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Начисления/Списания</h5>
            <div class="transaction-list">
                <ul class="list-group">
                    {#each data.txes as tx}
                        <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {tx.amount > 0 ? "+" : ""}{tx.amount} по причине "{tx.reason}"
                            от {tx.expand.by.name}
                            <span class="badge badge-success">$-150.00</span>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="card-footer text-center">
            <form method="POST" action="/?/logout">
                <button type="submit" class="btn btn-outline-primary">Выйти из аккаунта</button>
            </form>
        </div>
    </div>
</div>

<style>
    .card {
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
        background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
        color: white;
        border-radius: 15px 15px 0 0;
        padding: 20px;
        text-align: center;
    }
    .balance {
        font-size: 2rem;
        font-weight: bold;
    }
    .transaction-list {
        max-height: 300px;
        overflow-y: auto;
    }
    .container {
        margin-top: 20vh;
    }
</style>
