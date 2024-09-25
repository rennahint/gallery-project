class ArtPiecesController < ApplicationController
  def index
    @art_pieces = ArtPiece.all
    render json: @art_pieces
  end

  def create
    @art_pieces = ArtPiece.new(art_piece_params)
    if @art_pieces.save
      render json: @art_pieces, status: :created
    else
      render json: @art_pieces.errors, status: :unprocessable_entity
    end
  end

  private

  def art_piece_params
    params.require(:art_piece).permit(:title, :price, :description, :art_type, :commission_id)
  end
end