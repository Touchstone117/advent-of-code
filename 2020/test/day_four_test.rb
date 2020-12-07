# frozen_string_literal: true

require_relative '../lib/env'
require_relative '../day_four/day_four'

class DayFourTest < Minitest::Test
  def test_part_1_practice
    assert_equal 2, DayFour.new(DayFourInput.practice_part_one).solve_part_one
  end

  def test_part_1_real
    assert_equal 260, DayFour.new(DayFourInput.real).solve_part_one
  end

  def test_part_2_practice
    assert_equal 4, DayFour.new(DayFourInput.practice_part_two).solve_part_two
  end

  def test_part_2_real
    assert_equal 260, DayFour.new(DayFourInput.real).solve_part_two
  end
end
