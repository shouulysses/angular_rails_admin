class CreateLanguageDetails < ActiveRecord::Migration
  def change
    create_table :language_details do |t|
      t.text :more
      t.references :language, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
