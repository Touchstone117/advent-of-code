# frozen_string_literal: true

require_relative '../lib/env'
require_relative '../day_four/day_four'

class DayFourTest < Minitest::Test
  def test_part_1_practice
    assert_equal 2, DayFour.new(DayFourInput.practice).solve_part_one
  end

  def test_part_1_real
    assert_equal 260, DayFour.new(DayFourInput.real).solve_part_one
  end
end
