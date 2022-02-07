<?php
namespace Assets\utils;

/**
 * DataRequest Utils
 * @link 
 * @author Roberto Dorado <robertodorado7@gmail.com>
 * @package Assets\utils
 */
class DataRequest
{
    /**
     * dados do painel dasboard
     *
     * @var array
     */
    private $data;

    /**
     * retorna as informações do dashbord dos clientes
     *
     * @return array
     */
    public function dashboardClients()
    {
        $this->data = [
            'name' => 'Clientes',
            'value' => '1349'
        ];

        return $this->data;
    }

    /**
     * retorna informações do dashboard de usuários
     *
     * @return array
     */
    public function dashboardUsers()
    {
        $this->data = [
            'name' => 'Usuários',
            'value' => '549'
        ];
        return $this->data;
    }

    /**
     * retorna o numero de fornecedores
     *
     * @return array
     */
    public function dashboardProviders()
    {
        $this->data = [
            'name' => 'Fornecedores',
            'value' => '89'
        ];
        return $this->data;
    }
}