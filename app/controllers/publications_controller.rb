class PublicationsController < ApplicationController

  def index
  end

  def show
    @publication = Publication.find(params[:id])
  end

  def new
    @publication = Publication.new
  end

  def create
    @publication = Publication.new(publication_params)
    @publication.text = @publication.text.gsub(/\n/, '<br>')
    if @publication.save
      redirect_to publication_path(@publication)
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def publication_params
    params.require(:publication).permit(:title, :subtitle,:author, :text, :date, :pdf_url)
  end

end
