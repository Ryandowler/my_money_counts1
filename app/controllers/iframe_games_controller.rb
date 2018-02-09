class IframeGamesController < ApplicationController
  before_action :set_iframe_game, only: [:show, :edit, :update, :destroy]

  # GET /iframe_games
  # GET /iframe_games.json
  def index
    @iframe_games = IframeGame.all
  end

  # GET /iframe_games/1
  # GET /iframe_games/1.json
  def show
  end

  # GET /iframe_games/new
  def new
    @iframe_game = IframeGame.new
  end

  # GET /iframe_games/1/edit
  def edit
  end

  # POST /iframe_games
  # POST /iframe_games.json
  def create
    @iframe_game = IframeGame.new(iframe_game_params)

    respond_to do |format|
      if @iframe_game.save
        format.html { redirect_to @iframe_game, notice: 'Iframe game was successfully created.' }
        format.json { render :show, status: :created, location: @iframe_game }
      else
        format.html { render :new }
        format.json { render json: @iframe_game.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /iframe_games/1
  # PATCH/PUT /iframe_games/1.json
  def update
    respond_to do |format|
      if @iframe_game.update(iframe_game_params)
        format.html { redirect_to @iframe_game, notice: 'Iframe game was successfully updated.' }
        format.json { render :show, status: :ok, location: @iframe_game }
      else
        format.html { render :edit }
        format.json { render json: @iframe_game.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /iframe_games/1
  # DELETE /iframe_games/1.json
  def destroy
    @iframe_game.destroy
    respond_to do |format|
      format.html { redirect_to iframe_games_url, notice: 'Iframe game was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_iframe_game
      @iframe_game = IframeGame.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def iframe_game_params
      params.require(:iframe_game).permit(:link, :title)
    end
end
