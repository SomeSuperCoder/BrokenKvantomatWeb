<script>
    export let modal_id;
    export let title;
    export let launch_button_text;
    export let apply_button_text;
    export let func;
</script>

<button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#{modal_id}"
>
    {launch_button_text}
</button>

<div
    class="modal fade"
    id="{modal_id}"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{title}</h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal">Закрыть</button>
                <button data-bs-dismiss="modal" type="button" class="btn btn-primary" on:click={func}>{apply_button_text}</button>
            </div>
        </div>
    </div>
</div>
