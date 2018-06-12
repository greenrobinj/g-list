class Api::StuffsController < ApplicationController

    before_action :stuff_params, only: [:show, :update, :edit, :destroy]


  def index
    render json: Stuff.all 
  end

  def create
    stuff = Stuff.new(stuff_params)
    if stuff.save
      render json: stuff
    else 
      render json: {errors: stuff.errors}, status: 422
    end
  end

  def update
    stuff = Stuff.find (params[:id])
    stuff.update(complete: !item.complete)
    render json: stuff
  end

  def destroy
    Stuff.find(params[:id]).destroy
    render json: { message: 'Stuff deleted'}
  end

  private

  def stuff_params
    params.require(:stuff).permit(:name, :complete)
  end
end