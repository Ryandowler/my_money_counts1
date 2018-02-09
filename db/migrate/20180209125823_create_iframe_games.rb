class CreateIframeGames < ActiveRecord::Migration
  def change
    create_table :iframe_games do |t|
      t.string :link

      t.timestamps null: false
    end
  end
end
