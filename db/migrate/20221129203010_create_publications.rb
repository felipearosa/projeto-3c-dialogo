class CreatePublications < ActiveRecord::Migration[7.0]
  def change
    create_table :publications do |t|
      t.string :author
      t.string :text
      t.date :date
      t.string :pdf_url

      t.timestamps
    end
  end
end
