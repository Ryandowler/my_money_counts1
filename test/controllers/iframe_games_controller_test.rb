require 'test_helper'

class IframeGamesControllerTest < ActionController::TestCase
  setup do
    @iframe_game = iframe_games(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:iframe_games)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create iframe_game" do
    assert_difference('IframeGame.count') do
      post :create, iframe_game: { link: @iframe_game.link }
    end

    assert_redirected_to iframe_game_path(assigns(:iframe_game))
  end

  test "should show iframe_game" do
    get :show, id: @iframe_game
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @iframe_game
    assert_response :success
  end

  test "should update iframe_game" do
    patch :update, id: @iframe_game, iframe_game: { link: @iframe_game.link }
    assert_redirected_to iframe_game_path(assigns(:iframe_game))
  end

  test "should destroy iframe_game" do
    assert_difference('IframeGame.count', -1) do
      delete :destroy, id: @iframe_game
    end

    assert_redirected_to iframe_games_path
  end
end
