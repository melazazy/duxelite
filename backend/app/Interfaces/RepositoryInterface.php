<?php

namespace App\Interfaces;

interface RepositoryInterface
{
    public function all(array $columns = ['*']);
    public function find(int $id, array $columns = ['*']);
    public function findByField(string $field, $value, array $columns = ['*']);
    public function create(array $data);
    public function update(array $data, int $id);
    public function delete(int $id);
}