class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
  end

  def trainning
  end

  def book
  end

  def about
  end

end
