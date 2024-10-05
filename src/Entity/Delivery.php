<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DeliveryRepository;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource()]
#[ORM\Entity(repositoryClass: DeliveryRepository::class)]
class Delivery
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Customer::class)]
    private Customer $customer;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private User $user;

    #[ORM\ManyToMany(targetEntity: Product::class)]
    private Product $product;

    #[ORM\Column (type: 'datetime')]
    private string $deliveryDate;

    #[ORM\Column (type: 'string')]
    private string $deliveryAddress;

    #[ORM\Column (type: 'string')]
    private string $deliveryCity;

    #[ORM\Column (type: 'string')]
    private string $tax;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomer(): Customer
    {
        return $this->customer;
    }

    public function setCustomer(Customer $customer): void
    {
        $this->customer = $customer;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): void
    {
        $this->user = $user;
    }

    public function getProduct(): Product
    {
        return $this->product;
    }

    public function setProduct(Product $product): void
    {
        $this->product = $product;
    }

    public function getDeliveryDate(): string
    {
        return $this->deliveryDate;
    }

    public function setDeliveryDate(string $deliveryDate): void
    {
        $this->deliveryDate = $deliveryDate;
    }

    public function getDeliveryAddress(): string
    {
        return $this->deliveryAddress;
    }

    public function setDeliveryAddress(string $deliveryAddress): void
    {
        $this->deliveryAddress = $deliveryAddress;
    }

    public function getDeliveryCity(): string
    {
        return $this->deliveryCity;
    }

    public function setDeliveryCity(string $deliveryCity): void
    {
        $this->deliveryCity = $deliveryCity;
    }

    public function getTax(): string
    {
        return $this->tax;
    }

    public function setTax(string $tax): void
    {
        $this->tax = $tax;
    }

}
