# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
cory= User.create(username:'cory', password: '123', wallet: 200)
ryan= User.create(username:'ryan', password: '123', wallet: 500)
vampireLord =Unit.create(name:'vampire lord', health: 300, rarity: 5, cost: 10)
littleVamp = Unit.create(name: 'vampire grunt', health: 100, rarity: 1, cost: 2)
coryLibrary = Library.create(user_id:cory.id, unit_id: vampireLord.id)
ryanLibrary = Library.create(user_id:ryan.id, unit_id: littleVamp.id)
coryBabyVamp = Library.create(user_id: cory.id, unit_id: littleVamp.id)
testUnit = Library.create(user_id: 3, unit_id: vampireLord.id)
