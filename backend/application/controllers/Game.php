<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');
require APPPATH . '/libraries/REST_Controller.php';

class Game extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('gameModel', 'game');
    }

    //function to add game
    public function create_post()
    {
       
   
       
          $details = array('name' => $this->post('name'), 
            'description' => $this->post('description'), 
            'price' => $this->post('price'), 
            'rating'=> $this->post('rating'));
            $addGame = $this->game->insert($details);
            if ($addGame) {
                $this->response(['message' => 'game added'], REST_Controller::HTTP_OK);
            } else {
                $this->response("cannot add game, try again ", REST_Controller::HTTP_BAD_REQUEST);
            }
        
    }

    public function allGames_get($date = null)
    {
      
        $this->response($this->game->findAllGames());
    }

  
//function for updating game
    public function updateGame_post($id = null)
    {
        $details = array('name' => $this->post('name'), 
        'description' => $this->post('description'), 
        'price' => $this->post('price'), 
        'rating'=> $this->post('rating'));
        $updateGame = $this->game->update($details,$id);

        if ($updateGame) 
         return $this->response(['message' => 'game updated successfully.'], REST_Controller::HTTP_OK);
        else
         return  $this->response("cannot update, try again", REST_Controller::HTTP_BAD_REQUEST);
        
    }

    //function for deleting game
    public function delete_get($id = null)
    {
        $dltGame = $this->game->delete($id);
        if ($dltGame) 
           return $this->response(['message' => 'game has been deleted.'], REST_Controller::HTTP_OK);
         else 
            return $this->response("cannot delete, try again", REST_Controller::HTTP_BAD_REQUEST);
        
    }
}
