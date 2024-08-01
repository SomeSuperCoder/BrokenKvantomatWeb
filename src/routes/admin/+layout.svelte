<nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"
            >Квантомат <span class="badge web_text">Web</span></a
        >
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/admin"
                        >Главная</a
                    >
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="/admin"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Отчёты
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#"
                                >Глобальный рейтинг</a
                            >
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                            <a class="dropdown-item" href="#">Мои ученики</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <form method="POST" action="/?/logout">
                <button type="submit" class="btn btn-outline-light"
                    >Выйти из аккаунта</button
                >
            </form>
        </div>
    </div>
</nav>

<slot></slot>

<style>
    .custom-navbar {
        background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
    }

    .custom-navbar .navbar-brand {
        color: #ffffff;
        font-weight: bold;
    }

    .custom-navbar .nav-link {
        color: #ffffff;
        transition: color 0.3s;
    }

    .custom-navbar .nav-link:hover {
        color: #ffdd57; /* Bright yellow on hover */
    }

    .custom-navbar .dropdown-menu {
        background-color: #ffffff;
    }

    .custom-navbar .dropdown-item {
        color: #333333;
    }

    .custom-navbar .dropdown-item:hover {
        background-color: #f8f9fa; /* Light grey on hover */
    }

    .custom-navbar .btn-outline-light {
        border-color: #ffffff;
        color: #ffffff;
    }

    .custom-navbar .btn-outline-light:hover {
        background-color: #ffffff;
        color: #6a11cb; /* Match the gradient */
    }

    .web_text {
        background-color: orange;
    }
</style>
