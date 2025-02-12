<?php

namespace App\Controller;

use App\Entity\Delivery;
use App\Repository\DeliveryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class DeliveryController extends AbstractController
{
    private DeliveryRepository $deliveryRepository;
    private SerializerInterface $serializer;

    public function __construct(DeliveryRepository $deliveryRepository, SerializerInterface $serializer)
    {
        $this->deliveryRepository = $deliveryRepository;
        $this->serializer = $serializer;
    }

    #[Route('/', name: 'api_delivery', methods: ['GET'])]
    public function index(): Response
    {
        $deliveries = $this->deliveryRepository->findAll();
        $deliveries = $this->serializer->serialize($deliveries, 'json');

        return new Response($deliveries, 200, [
            'Content-Type' => 'application/json'
        ]);
    }

    #[Route('/new', name: 'api_delivery_create', methods: ['GET','POST'])]
    public function create(Request $request): Response
    {
        $data = $request->getContent();
        $delivery = $this->serializer->deserialize($data, Delivery::class, 'json');

        $this->deliveryRepository->persist($delivery);
        $this->deliveryRepository->flush();

        return new Response('', 201);
    }

    #[Route('/{id}', name: 'api_delivery_show', methods: ['GET'])]
    public function show(int $id): Response
    {
        $delivery = $this->deliveryRepository->find($id);
        $delivery = $this->serializer->serialize($delivery, 'json');

        return new Response($delivery, 200, [
            'Content-Type' => 'application/json'
        ]);
    }

    #[Route('/{id}', name: 'api_delivery_update', methods: ['PUT'])]
    public function update(int $id, Request $request): Response
    {
        // Trouver l'entité existante
        $delivery = $this->deliveryRepository->find($id);
        if (!$delivery) {
            return new Response('Delivery not found', Response::HTTP_NOT_FOUND);
        }

        // Désérialiser les données reçues
        $data = $request->getContent();
        $updatedDelivery = $this->serializer->deserialize($data, Delivery::class, 'json');

        $delivery->setCustomer($updatedDelivery->getCustomer());
        $delivery->setUser($updatedDelivery->getUser());
        $delivery->setProducts($updatedDelivery->getProducts());
        $delivery->setDeliveryDate($updatedDelivery->getDeliveryDate());
        $delivery->setDeliveryAddress($updatedDelivery->getDeliveryAddress());
        $delivery->setDeliveryCity($updatedDelivery->getDeliveryCity());
        $delivery->setTax($updatedDelivery->getTax());

        $this->deliveryRepository->persist($delivery);
        $this->deliveryRepository->flush();

        $data = $this->serializer->serialize($delivery, 'json', ['groups' => 'delivery:read']);
        return new Response($data, Response::HTTP_OK, [
            'Content-Type' => 'application/json'
        ]);
    }


    #[Route('/{id}', name: 'api_delivery_delete', methods: ['DELETE'])]
    public function delete(int $id): Response
    {
        $delivery = $this->deliveryRepository->find($id);
        $this->deliveryRepository->remove($delivery);
        $this->deliveryRepository->flush();

        return new Response('', 204);
    }
}