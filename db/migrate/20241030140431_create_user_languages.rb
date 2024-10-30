class CreateUserLanguages < ActiveRecord::Migration[7.1]
  def change
    create_table :user_languages do |t|
      t.references :user, null: false, foreign_key: true
      t.references :language, null: false, foreign_key: true
      t.boolean :spoken
      t.boolean :wanted

      t.timestamps
    end
  end
end
