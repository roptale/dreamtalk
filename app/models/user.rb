class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  acts_as_favoritable #LW: utilisation de la gem pour marquer un user en favori (systeme de follow)

  has_many :user_languages
  has_many :languages, through: :user_languages

  has_many :chatrooms_as_creator, class_name: 'Chatroom', foreign_key: :creator_id
  has_many :chatrooms_as_receiver, class_name: 'Chatroom', foreign_key: :receiver_id

  has_many :messages
end
