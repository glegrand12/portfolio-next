<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#Route('/api/invoice/item', name: 'api_invoice_item_', methods: ['GET', 'POST', 'PUT', 'DELETE'])
class InvoiceItemController extends AbstractController
{
    #[Route('/invoice/item', name: 'app_invoice_item')]
    public function index(): Response
    {
        return $this->render('invoice_item/index.html.twig', [
            'controller_name' => 'InvoiceItemController',
        ]);
    }
}
