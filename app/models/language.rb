class Language < ApplicationRecord
  has_many :user_languages
  has_many :users, through: :user_languages

  def icon_code
    return "gb" if lang_code == "en"

    return lang_code
  end
end
