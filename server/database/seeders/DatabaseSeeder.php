<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Report;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
        ]);

        $users = User::all();

        foreach ($users as $user) {
            Report::factory(2)->create(['user_id' => $user->id]);
        }
    }
}
