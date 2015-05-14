require 'faker'

10.times do
  Winner.create(name: Faker::Name.name,
                win_count: rand(10)+1)
end