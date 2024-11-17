class AddLangCodeToLanguages < ActiveRecord::Migration[7.1]
  def change
    add_column :languages, :lang_code, :string
  end
end
