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
french = Language.create(name: "French", lang_code: "fr")
german = Language.create(name: "German", lang_code: "de")
english = Language.create(name: "English", lang_code: "en")

puts "Creating users..."
varsik = User.create(first_name: "Varsenik", city: "Paris", age: 28, email: "varsik@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/67.jpg")
roseline = User.create(first_name: "Roseline", city: "Bern", age: 30, email: "roseline@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/71.jpg")
lise = User.create(first_name: "Lise", city: "Berlin", age: 25, email: "lise.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/79.jpg")
helenik = User.create(first_name: "Helenik", city: "Lyon", age: 32, email: "helenik.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/56.jpg")
pete = User.create(first_name: "Pete", city: "Sofia", age: 26, email: "pete.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/0.jpg")
alice = User.create(first_name: "Alice", city: "Paris", age: 28, email: "alice.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/1.jpg")
bob = User.create(first_name: "Bob", city: "Berlin", age: 30, email: "bob.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/1.jpg")
charlie = User.create(first_name: "Charlie", city: "London", age: 24, email: "charlie.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/2.jpg")
diana = User.create(first_name: "Diana", city: "Madrid", age: 29, email: "diana.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/2.jpg")
eva = User.create(first_name: "Eva", city: "Rome", age: 27, email: "eva.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/3.jpg")
frank = User.create(first_name: "Frank", city: "Amsterdam", age: 31, email: "frank.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/3.jpg")
grace = User.create(first_name: "Grace", city: "Barcelona", age: 25, email: "grace.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/4.jpg")
harry = User.create(first_name: "Harry", city: "Prague", age: 33, email: "harry.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/4.jpg")
ivy = User.create(first_name: "Ivy", city: "Vienna", age: 23, email: "ivy.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/5.jpg")
jack = User.create(first_name: "Jack", city: "Budapest", age: 28, email: "jack.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/5.jpg")
kate = User.create(first_name: "Kate", city: "Lisbon", age: 30, email: "kate.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/6.jpg")
leo = User.create(first_name: "Leo", city: "Copenhagen", age: 26, email: "leo.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/6.jpg")
mia = User.create(first_name: "Mia", city: "Stockholm", age: 29, email: "mia.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/7.jpg")
nick = User.create(first_name: "Nick", city: "Oslo", age: 27, email: "nick.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/7.jpg")
olivia = User.create(first_name: "Olivia", city: "Helsinki", age: 31, email: "olivia.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/8.jpg")
paul = User.create(first_name: "Paul", city: "Dublin", age: 25, email: "paul.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/8.jpg")
quinn = User.create(first_name: "Quinn", city: "Edinburgh", age: 32, email: "quinn.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/9.jpg")
ryan = User.create(first_name: "Ryan", city: "Zurich", age: 24, email: "ryan.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/9.jpg")
sara = User.create(first_name: "Sara", city: "Brussels", age: 28, email: "sara.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/women/10.jpg")
tom = User.create(first_name: "Tom", city: "Athens", age: 30, email: "tom.@gmail.com", password: "123456", profile_picture: "https://randomuser.me/api/portraits/men/10.jpg")

puts "Creating user languages..."
# langues parlées et souhaitées pour un utilisateur
UserLanguage.create(user: varsik, language: french, spoken: true, wanted: false)
UserLanguage.create(user: varsik, language: english, spoken: false, wanted: true)

UserLanguage.create(user: roseline, language: english, spoken: true, wanted: true)
UserLanguage.create(user: roseline, language: german, spoken: true, wanted: true)

UserLanguage.create(user: lise, language: german, spoken: true, wanted: true)
UserLanguage.create(user: lise, language: french, spoken: true, wanted: false)

UserLanguage.create(user: helenik, language: french, spoken: true, wanted: false)
UserLanguage.create(user: helenik, language: english, spoken: false, wanted: true)

UserLanguage.create(user: pete, language: english, spoken: true, wanted: false)
UserLanguage.create(user: pete, language: german, spoken: false, wanted: true)

UserLanguage.create(user: alice, language: french, spoken: true, wanted: false)
UserLanguage.create(user: alice, language: english, spoken: false, wanted: true)

UserLanguage.create(user: bob, language: german, spoken: true, wanted: false)
UserLanguage.create(user: bob, language: english, spoken: false, wanted: true)

UserLanguage.create(user: charlie, language: english, spoken: true, wanted: false)
UserLanguage.create(user: charlie, language: french, spoken: false, wanted: true)

UserLanguage.create(user: diana, language: french, spoken: true, wanted: false)
UserLanguage.create(user: diana, language: german, spoken: false, wanted: true)

UserLanguage.create(user: eva, language: english, spoken: true, wanted: false)
UserLanguage.create(user: eva, language: french, spoken: false, wanted: true)

UserLanguage.create(user: frank, language: german, spoken: true, wanted: false)
UserLanguage.create(user: frank, language: english, spoken: false, wanted: true)

UserLanguage.create(user: grace, language: french, spoken: true, wanted: false)
UserLanguage.create(user: grace, language: english, spoken: false, wanted: true)

UserLanguage.create(user: harry, language: english, spoken: true, wanted: false)
UserLanguage.create(user: harry, language: german, spoken: false, wanted: true)

UserLanguage.create(user: ivy, language: french, spoken: true, wanted: false)
UserLanguage.create(user: ivy, language: english, spoken: false, wanted: true)

UserLanguage.create(user: jack, language: german, spoken: true, wanted: false)
UserLanguage.create(user: jack, language: english, spoken: false, wanted: true)

UserLanguage.create(user: kate, language: english, spoken: true, wanted: false)
UserLanguage.create(user: kate, language: french, spoken: false, wanted: true)

UserLanguage.create(user: leo, language: french, spoken: true, wanted: false)
UserLanguage.create(user: leo, language: german, spoken: false, wanted: true)

UserLanguage.create(user: mia, language: english, spoken: true, wanted: false)
UserLanguage.create(user: mia, language: french, spoken: false, wanted: true)

UserLanguage.create(user: nick, language: german, spoken: true, wanted: false)
UserLanguage.create(user: nick, language: english, spoken: false, wanted: true)

UserLanguage.create(user: olivia, language: french, spoken: true, wanted: false)
UserLanguage.create(user: olivia, language: english, spoken: false, wanted: true)

UserLanguage.create(user: paul, language: english, spoken: true, wanted: false)
UserLanguage.create(user: paul, language: german, spoken: false, wanted: true)

UserLanguage.create(user: quinn, language: french, spoken: true, wanted: false)
UserLanguage.create(user: quinn, language: english, spoken: false, wanted: true)

UserLanguage.create(user: ryan, language: german, spoken: true, wanted: false)
UserLanguage.create(user: ryan, language: english, spoken: false, wanted: true)

UserLanguage.create(user: sara, language: english, spoken: true, wanted: false)
UserLanguage.create(user: sara, language: french, spoken: false, wanted: true)

UserLanguage.create(user: tom, language: french, spoken: true, wanted: false)
UserLanguage.create(user: tom, language: german, spoken: false, wanted: true)

puts "Creating chatrooms..."
chatroom_1 = Chatroom.create(creator: varsik, receiver: roseline)
Message.create(chatroom: chatroom_1, user: varsik, content: "Hello!")
Message.create(chatroom: chatroom_1, user: roseline, content: "Hi")

chatroom_2 = Chatroom.create(creator: varsik, receiver: lise)
Message.create(chatroom: chatroom_2, user: varsik, content: "Hello!")
Message.create(chatroom: chatroom_2, user: lise, content: "How are you?")
