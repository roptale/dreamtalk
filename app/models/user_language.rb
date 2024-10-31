class UserLanguage < ApplicationRecord
  belongs_to :user
  belongs_to :language

  before_save :set_language_name

  private

  def set_language_name
    self.language_name = language.name if language
  end
end
