<?php
require_once "assets/utils/Menu.php";
use Assets\utils\Menu;
?>

<!-- BEGIN SIDEBAR MENU -->
<ul class="page-sidebar-menu">
    <li class="sidebar-toggler-wrapper">
        <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
        <div class="sidebar-toggler hidden-phone">
        </div>
        <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
    </li>
    <li class="sidebar-search-wrapper">
        <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
        <form class="sidebar-search" action="extra_search.html" method="POST">
            <div class="form-container">
                <div class="input-box">
                    <a href="javascript:;" class="remove"></a>
                    <input type="text" placeholder="Search..." />
                    <input type="button" class="submit" value=" " />
                </div>
            </div>
        </form>
        <!-- END RESPONSIVE QUICK SEARCH FORM -->
    </li>
    <li class="start active ">
        <a href="index.html">
            <i class="fa fa-home"></i>
            <span class="title">
                Dashboard
            </span>
            <span class="selected">
            </span>
        </a>
    </li>
    <!--Cliente-->
    <li class="">
        <a href="javascript:;">
            <i class="fa fa-file-text"></i>
            <span class="title">
                Cadastro
            </span>
            <span class="arrow "></span>
        </a>
        <ul class="sub-menu">
            <?php foreach ((new Menu)->menuCadastro() as $cadastro) : ?>
                <li>
                    <a href="#"><?= $cadastro; ?></a>
                </li>
            <?php endforeach ?>
            <!-- <li>
                <a href="#">Cliente</a>
            </li>
            <li>
                <a href="#">Fornecedor</a>
            </li>
            <li>
                <a href="#">Usuário</a>
            </li> -->
        </ul>
    </li>
    <!--Relatorio-->
    <li class="">
        <a href="javascript:;">
            <i class="fa fa-bar-chart-o"></i>
            <span class="title">
                Relatório
            </span>
            <span class="arrow "></span>
        </a>
        <ul class="sub-menu">
            <?php foreach ((new Menu)->menuRelatorio() as $relatorio) : ?>
                <li>
                    <a href="#"><?= $relatorio ?></a>
                </li>
            <?php endforeach ?>
            <!-- <li>
                <a href="#">Cliente</a>
            </li>
            <li>
                <a href="#">Faturamento</a>
            </li> -->
        </ul>
    </li>
</ul>
<!-- END SIDEBAR MENU -->