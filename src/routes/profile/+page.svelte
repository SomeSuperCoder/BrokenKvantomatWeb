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
            <p class="balance">Ваш баланс: {balance} Kvant</p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Ваши Начисления/Списания</h5>
            <div class="transaction-list">
                {#each data.txes as tx}
                    <div class="transaction-item bg-light">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1">{tx.reason}</h6>
                                <small class="text-muted">от {tx.expand.by.name}</small>
                            </div>
                            <span class="badge badge-{tx.amount > 0 ? "success" : "danger"}">{tx.amount > 0 ? "+" : ""}{tx.amount}</span>
                        </div>
                    </div>
                {:else}
                <h5 class="text-secondary">Тут пока ничего нет ;(</h5>
                {/each}
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
    body {
            background-color: #f8f9fa;
        }
        .card {
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
            max-height: 400px;
            overflow-y: auto;
            padding: 15px;
        }
        .transaction-item {
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 10px;
            transition: transform 0.2s;
        }
        .transaction-item:hover {
            transform: scale(1.02);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .badge-success {
            background-color: #28a745;
        }
        .badge-danger {
            background-color: #dc3545;
        }
        .badge-primary {
            background-color: #007bff;
        }
</style>
