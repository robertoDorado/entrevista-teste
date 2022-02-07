<?php
namespace Assets\utils;

/**
 * Menu Utils
 * @link 
 * @author Roberto Dorado <robertodorado7@gmail.com>
 * @package Assets\utils
 */
class Menu
{
    /**
     * Submenu utilizado que retorn na view
     *
     * @var array
     */
    private $submenu;
    
    /**
     * Retorna o menu de cadastro
     *
     * @return array
     */
    public function menuCadastro()
    {
        $this->submenu = [
            'Usuário',
            'Fornecedor',
            'Cliente',
            'Produtos',
            'Perfil de acesso',
        ];
        sort($this->submenu);

        return $this->submenu;
    }

    /**
     * Retorna o menu de relatorio
     *
     * @return array
     */
    public function menuRelatorio()
    {
        $this->submenu = [
            'Produtos',
            'Faturamento',
            'Cliente',
        ];
        sort($this->submenu);

        return $this->submenu;
    }
}
