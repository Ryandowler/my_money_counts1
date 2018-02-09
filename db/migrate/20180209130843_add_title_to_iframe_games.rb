class AddTitleToIframeGames < ActiveRecord::Migration
  def change
    add_column :iframe_games, :title, :string
  end
end
