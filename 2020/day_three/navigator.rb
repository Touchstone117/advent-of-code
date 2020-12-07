# frozen_string_literal: true

require_relative '../lib/env'

class Navigator
  attr_reader :current_position

  def initialize(map)
    @map = map.dup
    @current_position = { x: 0, y: 0 }
  end

  def update_map(map)
    @map = map.dup
    self
  end

  def set_current_position
    throw 'not implemented'
  end

  def move_position(x, y)
    start = @current_position.dup
    start[:x] += x
    start[:y] += y
    @current_position = start
    self
  end

  def check_position(coordinates = @current_position)
    if @map[coordinates[:y]]
      line = @map[coordinates[:y]]
      line[coordinates[:x]] || 'x axis too short'
    else
      'y axis too short'
    end
  end
end
