<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\InvoiceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource()]
#[ORM\Entity(repositoryClass: InvoiceRepository::class)]
class Invoice
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Customer::class)]
    private Customer $customer;

    #[ORM\Column]
    private string $invoiceDate;

    #[ORM\OneToMany(targetEntity: InvoiceItem::class, mappedBy: 'invoice')]
    private InvoiceItem $invoiceItems;

    #[ORM\Column]
    private float $total;

    #[ORM\Column]
    private string $taxes;

    #[ORM\Column]
    private string $status;


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

    public function getInvoiceDate(): string
    {
        return $this->invoiceDate;
    }

    public function setInvoiceDate(string $invoiceDate): void
    {
        $this->invoiceDate = $invoiceDate;
    }

    public function getInvoiceItems(): InvoiceItem
    {
        return $this->invoiceItems;
    }

    public function setInvoiceItems(InvoiceItem $invoiceItems): void
    {
        $this->invoiceItems = $invoiceItems;
    }

    public function getTotal(): float
    {
        return $this->total;
    }

    public function setTotal(float $total): void
    {
        $this->total = $total;
    }

    public function getTaxes(): string
    {
        return $this->taxes;
    }

    public function setTaxes(string $taxes): void
    {
        $this->taxes = $taxes;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): void
    {
        $this->status = $status;
    }

}
