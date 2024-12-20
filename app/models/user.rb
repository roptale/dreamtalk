class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  acts_as_favoritable #LW: utilisation de la gem pour marquer un user en favori (systeme de follow)
  acts_as_favoritor

  def favorited?(user)
    favorites.where(favoritable: user).exists?
  end

  def toggle_favorite(user)
    if favorited?(user)
      unfavorite(user)
    else
      favorite(user)
    end
  end

  has_many :user_languages
  has_many :languages, through: :user_languages

  has_many :chatrooms_as_creator, class_name: 'Chatroom', foreign_key: :creator_id
  has_many :chatrooms_as_receiver, class_name: 'Chatroom', foreign_key: :receiver_id

  has_many :messages

  def onboarded?
    return false unless first_name
    return false unless city
    return false unless age

    spoken_langs = user_languages.select { |lang| lang.spoken == true }
    wanted_langs = user_languages.select { |lang| lang.wanted == true }
    return false if spoken_langs.empty?
    return false if wanted_langs.empty?

    return true
  end

  def upload_profile_picture(file)
    result = Cloudinary::Uploader.upload(file)
    self.profile_picture = result['url']
    save
  end
end
