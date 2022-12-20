class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
  end

  def trainning
  end

  def book
  end
end
