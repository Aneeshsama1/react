<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class gameModel extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->load->database();

        $this->tbl = 'games';
    }

    //get all games
    function findALlGames()
    {
        
        return ($this->db->get($this->tbl)->result());
    }

    //insert game
    public function insert($data)
    {
        return ($this->db->insert($this->tbl, $data) ? $this->db->insert_id() : false);
    }

    //update game
    public function update($data, $id)
    {
        return ($this->db->update($this->tbl, $data, array('id' => $id))? true : false);
    }

   //delete game
    public function delete($id)
    {
        return ($this->db->delete($this->tbl, array('id' => $id)) ? true : false);
    }
}
