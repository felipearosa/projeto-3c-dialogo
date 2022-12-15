class ChangeDataTypeForText < ActiveRecord::Migration[7.0]
  def change
    change_column :publications, :text, :text
  end
end
