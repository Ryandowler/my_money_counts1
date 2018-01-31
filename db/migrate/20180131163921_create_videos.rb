class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.string :description
      t.string :link
      t.string :icon

      t.timestamps null: false
    end
  end
end
