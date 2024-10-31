class AddLanguageNameToUserLanguages < ActiveRecord::Migration[7.1]
  def change
    add_column :user_languages, :language_name, :string
  end
end
