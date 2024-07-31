<style>
    @import 'bootstrap/dist/css/bootstrap.min.css';

    .scroll-view {
        overflow: scroll;
        max-height: 400px;
    }
</style>

<script>
    let balance = 10;
</script>

<div class="container">
    <div class="row">
        <div class="col col-7">
            <h1 class="text-center display-3">Иванов Иван Иванович</h1>
        </div>
        <div class="col">
            <h1 class="text-center text-primary font-weight-bold rounded mt-3">{balance} Kvant</h1>
        </div>
    </div>    
    <div class="card mt-5">
        <h1 class="text-center display-5">История начислений</h1>
        <div class="card-body scroll-view">
            <table class="table table-striped table-hover table-borderless">
                <thead>
                    <th>Сумма</th>
                    <th>Причина</th>
                </thead>
                <tbody>
                    <tr class="col col-12">
                        <td>+10</td>
                        <td>За хорошее поведение</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
