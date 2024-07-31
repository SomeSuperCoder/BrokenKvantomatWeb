<script>
    let search_text = "";
    let search_results = [];

    export let data;

    const accounts = data.accounts;

    console.log(accounts);

    function search() {
        const tmp_search_text = search_text.toLowerCase()
        search_results = [];

        if (search_text === "" || search_text === " ") {
            return;
        }

        accounts.forEach(element => {
            console.log("=============");
            console.log(element.name.includes(search_text));
            console.log(element.username.includes(search_text));
            console.log("=============");
            if (element.name.toLowerCase().includes(tmp_search_text) || element.username.includes(tmp_search_text)) {
                search_results.push(element);
            }
        });
    }

    function edit(element) {
        console.log(`Edit: ${element}`)
    }
</script>

<div class="container">
    <div class="input-group mt-5">
        <input
            type="text"
            class="form-control"
            placeholder="Search"
            on:input={search}
            bind:value={search_text}
        />
    </div>
    <div class="row pl-3">
        {#each search_results as element, index}
            <div class="col-12 mt-2">
                <div class="row">
                    <div class="col-7">
                        <h2>
                            {element.name} <span class="text-secondary">{element.username}</span>
                        </h2>
                    </div>
                    {#if element.role === "user"}
                    <div class="col-5">
                        <a class="btn btn-primary" href="/admin/edit/{element.username}">Редактировать</a>
                    </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
