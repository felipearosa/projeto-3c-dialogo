class AddTitleToPublications < ActiveRecord::Migration[7.0]
  def change
    add_column :publications, :title, :string
  end
end
