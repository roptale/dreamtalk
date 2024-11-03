# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "Destroying all records..."
UserLanguage.destroy_all
Message.destroy_all
Chatroom.destroy_all
User.destroy_all
Language.destroy_all

puts "Creating languages..."
french = Language.create(name: "French")
german = Language.create(name: "German")
english = Language.create(name: "English")

puts "Creating users..."
varsik = User.create(first_name: "Varsenik", city: "Paris", age: 28, email: "varsik@gmail.com", password: "123456")
roseline = User.create(first_name: "Roseline", city: "Bern", age: 30, email: "roseline@gmail.com", password: "123456")
lise = User.create(first_name: "Lise", city: "Berlin", age: 25, email: "lise.@gmail.com", password: "123456")

puts "Creating user languages..."
# langues parlées et souhaitées pour un utilisateur
UserLanguage.create(user: varsik, language: french, spoken: true, wanted: false)
UserLanguage.create(user: varsik, language: english, spoken: false, wanted: true)

UserLanguage.create(user: roseline, language: english, spoken: true, wanted: true)
UserLanguage.create(user: roseline, language: german, spoken: true, wanted: true)

UserLanguage.create(user: lise, language: german, spoken: true, wanted: true)
UserLanguage.create(user: lise, language: french, spoken: true, wanted: false)

chatroom_1 = Chatroom.create(creator: varsik, receiver: roseline)
Message.create(chatroom: chatroom_1, user: varsik, content: "Hello!")
Message.create(chatroom: chatroom_1, user: roseline, content: "Hi")

chatroom_2 = Chatroom.create(creator: varsik, receiver: lise)
Message.create(chatroom: chatroom_2, user: varsik, content: "Hello!")
Message.create(chatroom: chatroom_2, user: lise, content: "How are you?")
