<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;

use App\Repository\CompanyRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
#

#[ApiResource()]
#[ORM\Entity(repositoryClass: CompanyRepository::class)]
class Company
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private string $name;

    #[ORM\Column(type: Types::BLOB, nullable: true)]
    private $logo;

    #[ORM\Column(length: 255)]
    private string $address;

    #[ORM\Column(length: 11)]
    private string $phone;

    #[ORM\Column(length: 255)]
    private string $siren;

    #[ORM\Column(length: 255)]
    private ?string $siret = null;

    #[ORM\OneToMany(targetEntity: User::class, mappedBy: 'company', orphanRemoval: true)]
    private Collection $users;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getLogo()
    {
        return $this->logo;
    }

    public function setLogo($logo): static
    {
        $this->logo = $logo;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): static
    {
        $this->address = $address;

        return $this;
    }

    public function getPhone(): ?int
    {
        return $this->phone;
    }

    public function setPhone(int $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getSiren(): ?string
    {
        return $this->siren;
    }

    public function setSiren(string $siren): static
    {
        $this->siren = $siren;

        return $this;
    }

    public function getSiret(): ?string
    {
        return $this->siret;
    }

    public function setSiret(string $siret): static
    {
        $this->siret = $siret;

        return $this;
    }

    public function getUsers(): Collection
    {
        return $this->users;
    }

   /** public function addUser(User $user): self
    * {
        * if (!$this->users->contains($user)) {
            * $this->users->add($user);
            * $user->setCompany($this);
        * }
 *
* return $this;
    * }
    *
    * public function removeUser(User $user): self
    * {
    * if ($this->users->removeElement($user)) {
    * if ($user->getCompany() === $this) {
    * $user->setCompany(null);
    * }
    * }
    *
    * return $this;
    * }
    *
 **/
}
