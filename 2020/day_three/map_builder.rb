# frozen_string_literal: true

require_relative '../lib/env'

class MapBuilder
  attr_reader :current_map

  def initialize(starting_map)
    @starting_map = starting_map.dup
    @current_map = starting_map.dup
  end

  def add_left(number)
    number.times do
      @current_map = @starting_map.zip(@current_map).map { |x| x.join('') }
    end
    self
  end
end
