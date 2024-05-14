<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/getalluser', name: 'app_user_index', methods: ['GET'])]
    public function index(UserRepository $users): Response
    {
        $users = $this->userRepository->findAll();

        $response = [];
        foreach ($users as $user) {
            $response[] = [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                // Add other fields here...
            ];
        }

        return $this->json($response);
    }
}