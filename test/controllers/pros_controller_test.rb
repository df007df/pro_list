require 'test_helper'

class ProsControllerTest < ActionController::TestCase
  setup do
    @pro = pros(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pros)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pro" do
    assert_difference('Pro.count') do
      post :create, pro: { : @pro., des: @pro.des, localhost: @pro.localhost, name: @pro.name, url: @pro.url }
    end

    assert_redirected_to pro_path(assigns(:pro))
  end

  test "should show pro" do
    get :show, id: @pro
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pro
    assert_response :success
  end

  test "should update pro" do
    patch :update, id: @pro, pro: { : @pro., des: @pro.des, localhost: @pro.localhost, name: @pro.name, url: @pro.url }
    assert_redirected_to pro_path(assigns(:pro))
  end

  test "should destroy pro" do
    assert_difference('Pro.count', -1) do
      delete :destroy, id: @pro
    end

    assert_redirected_to pros_path
  end
end
