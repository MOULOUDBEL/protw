<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class animauxFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nom' => $faker->name,
            'age' => $faker->paragraph,
            'descr' => $faker->paragraph,
            'img' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret

        ];
    }
}
