# frozen_string_literal: true

require_relative '../lib/env'
require_relative '../day_three/day_three'
require_relative '../day_three/map_builder'
require_relative '../day_three/navigator'

class DayThreeTest < Minitest::Test
  def test_part_1_practice
    assert_equal 7, DayThree.new(DayThreeInput.practice).solve_part_one
  end

  def test_part_1_real
    assert_equal 259, DayThree.new(DayThreeInput.real).solve_part_one
  end

  def test_part_2_practice
    assert_equal 336, DayThree.new(DayThreeInput.practice).solve_part_two
  end

  def test_part_2_real
    assert_equal 2224913600, DayThree.new(DayThreeInput.real).solve_part_two
  end
end

class MapBuilderTest < MiniTest::Test
  def test_map
    %w[
      .#
      #.
    ]
  end

  def test_return_single_map
    output = MapBuilder.new(test_map)
    assert_equal test_map, output.current_map
  end

  def test_return_add_left
    output = MapBuilder.new(test_map).add_left(1)
    expected =
      %w[
        .#.#
        #.#.
      ]
    assert_equal expected, output.current_map
  end

  def test_return_add_left_two
    output = MapBuilder.new(test_map).add_left(2)
    expected =
      %w[
        .#.#.#
        #.#.#.
      ]
    assert_equal expected, output.current_map
  end
end

class NavigatorTest < Minitest::Test
  def test_movement
    navigator = Navigator.new('map')
    navigator.move_position(2, 4)
    expected = { x: 2, y: 4 }
    assert_equal expected, navigator.current_position
  end

  def test_value_at_position
    map =
      %w[
        .#
        #2
      ]
    navigator = Navigator.new(map).move_position(1, 1)
    assert_equal '2', navigator.check_position
  end

  def test_x_axis_short
    map =
      %w[
        .
      ]
    navigator = Navigator.new(map).move_position(1, 0)
    assert_equal 'x axis too short', navigator.check_position
  end

  def test_y_axis_short
    map =
      %w[
        .
      ]
    navigator = Navigator.new(map).move_position(0, 1)
    assert_equal 'y axis too short', navigator.check_position
  end

  def test_update_map_uses_latest
    map =
      %w[
        .
      ]
    navigator = Navigator.new(map).move_position(1, 1)
    map =
      %w[
        .#
        #2
      ]
    navigator.update_map(map)
    assert_equal '2', navigator.check_position
  end
end
